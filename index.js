
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/passport-status", async (req, res) => {
    const data = req.body;
    const fileNo = data.fileNo;
    const dob = data.applDob;

    try {
        const $ = await getPage(data);
        const table = await getPassportStatus($);

        if (table['File Number']) {
            // Assuming statusText is still needed for some reason
            const statusText = JSON.stringify(table);

            // Respond with success and return table data (or statusText if needed)
            res.send({
                status: 'success',
                data: table
            });
        } else {
            res.status(400).send({
                status: 'error',
                message: 'Invalid inputs'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'error',
            message: 'Internal server error'
        });
    }
})

class RC {
    async getRcDetails(req, res) {
        try {
            const { vehicleNumber } = req.body;

            // Fetch RC details
            let url = `https://www.carinfo.app/rc-details/${vehicleNumber}`;
            let response = await axios.get(url);
            let html = response.data;
            let $ = cheerio.load(html);

            const rtoDetails = this.getRtoDetails($);
            const vehicleOwnerDetails = this.getOwnershipDetails($);
            const imageUrl = $('.MuiBox-root.css-11gihrn').children('img').attr('src');

            // Fetch Challan details
            url = `https://www.carinfo.app/challan-details/${vehicleNumber}`;
            response = await axios.get(url);
            html = response.data;
            $ = cheerio.load(html);

            const ownershipType = $('.hint-dtl').text();
            const insuranceDetails = this.getInsuranceDetails($);

            // Accumulating Data
            const VehicleData = {
                ownerName: vehicleOwnerDetails[0],
                ownershipType: ownershipType,
                Maker: vehicleOwnerDetails[1],
                vehicleImageUrl: imageUrl,
                insuranceDetails: insuranceDetails,
                rtoDetails: rtoDetails,
            };

            return res.json(VehicleData);

        } catch (error) {
            console.error('Error fetching vehicle details:', error);
            return res.status(500).json({ error: 'Error fetching vehicle details' });
        }
    }

    getRtoDetails($) {
        const rtoDetails = [];

        $('.MuiTypography-root.MuiTypography-body1.css-1c2ltzg').each((index, element) => {
            const text = $(element).text();
            rtoDetails.push(text);
        });

        const rtoObject = {
            rtoNumber: rtoDetails[0],
            RegisteredRTO: rtoDetails[1],
            city: rtoDetails[2],
            state: rtoDetails[3]
        };

        return rtoObject;
    }

    getOwnershipDetails($) {
        const vehicleOwnerDetails = [];

        $('.MuiTypography-root.MuiTypography-body1.css-1qt56zs').each((index, element) => {
            const text = $(element).text();
            vehicleOwnerDetails.push(text);
        });

        return vehicleOwnerDetails;
    }

    getInsuranceDetails($) {
        const expiryDetails = [];

        $('.rc-dtl-opt2').each((index, element) => {
            expiryDetails.push($(element).text());
        });

        const insuranceDetails = {
            insuranceExpiry: expiryDetails[0],
            PUCCExpiry: expiryDetails[1]
        };

        return insuranceDetails;
    }
};

// Creating Instance of RC
const Rc = new RC();

// Controller for the API
app.post('/getRcDetails', (req, res) => Rc.getRcDetails(req, res));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));