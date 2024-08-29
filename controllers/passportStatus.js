import { getPage, getPassportStatus } from '../utils/index.js';

export default async (req, res) => {
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
};
