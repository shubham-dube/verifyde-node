# API Endpoints

### Ridobiko API Endpoints

#### Login  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/login.php`  
**Description:** API to log in a user.  
**Method:** `POST`

---

#### Sign Up  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/signupUser.php`  
**Description:** API to sign up a new user.  
**Method:** `POST`

---

#### Get KYC History  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/getKycHistory.php`  
**Description:** API to retrieve KYC history.  
**Method:** `POST`

---

#### Get Account Details  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/getAccountDetails.php`  
**Description:** API to retrieve account details of a user.  
**Method:** `POST`

---

#### Initiate KYC Request  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/initiateKYCRequest.php`  
**Description:** API to initiate a KYC request.  
**Method:** `POST`

---

#### Send Email  
**Endpoint:** `https://www.ridobiko.com/android_digilocker/api/sendEmail.php`  
**Description:** API to send an email.  
**Method:** `POST`

---

## Python Server API Endpoints

### Get GST Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/gst/getCaptcha`  
**Description:** API to get the GST captcha.  
**Method:** `GET`

---

### Verify GST Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/gst/getGSTDetails`  
**Description:** API to verify GST details.  
**Method:** `POST`

---

### Verify CA Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/getCADetails`  
**Description:** API to verify CA (Chartered Accountant) details.  
**Method:** `POST`

---

### Verify FSSAI Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/get_fssai_details`  
**Description:** API to verify FSSAI details.  
**Method:** `POST`

---

### Verify Email Validity
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/check-email-validity`  
**Description:** API to verify the validity of an email address.  
**Method:** `POST`

---

### Verify Startup Certificate
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/startup/getCertificate`  
**Description:** API to verify startup certificates.  
**Method:** `POST`

---

### Verify Disability (UDID) Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/get_UDID_details`  
**Description:** API to verify disability UDID details.  
**Method:** `POST`

---

### Verify Aadhaar-PAN Linkage
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/check-PAN-aadhaar-linkage`  
**Description:** API to verify Aadhaar and PAN linkage.  
**Method:** `POST`
**Payload:** {
    "aadhaar": "123456789012",
    "PAN": "ABCDE1234F"
}

---

### Virtual Court Challan Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/challan/VC/getCaptcha`  
**Description:** API to get the captcha for virtual court challan.  
**Method:** `POST`

---

### Verify Virtual Court Challan
**Endpoint:** `https://verifyde.onrender.com/api/v1/challan/VC/getChallanDetails`  
**Description:** API to verify virtual court challan details.  
**Method:** `POST`

---

### Udyam Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/udyam/getCaptcha`  
**Description:** API to get the Udyam captcha.  
**Method:** `GET`

---

### Verify Udyam Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/udyam/getUdyamDetails`  
**Description:** API to verify Udyam details.  
**Method:** `POST`

---

### School Verification Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/school/getCaptcha`  
**Description:** API to get captcha for school verification.  
**Method:** `GET`

---

### Verify School Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/school/getSchools`  
**Description:** API to verify school details.  
**Method:** `POST`

---

### Verify CIN Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/getCINdetails`  
**Description:** API to verify CIN details.  
**Method:** `POST`

---

### Verify DIN Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/getDINdetails`  
**Description:** API to verify DIN details.  
**Method:** `POST`

---

### Verify Dentist Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/getDentistDetails`  
**Description:** API to verify dentist details.  
**Method:** `POST`

---

### Verify Doctor Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/getDoctorDetails`  
**Description:** API to verify doctor details.  
**Method:** `POST`

---

### Verify Nurse Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/getNurseDetails`  
**Description:** API to verify nurse details.  
**Method:** `POST`

---

### Verify IFSC Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/getIFSCDetails`  
**Description:** API to verify IFSC details.  
**Method:** `POST`

---

### TIN Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/tin/getCaptcha`  
**Description:** API to get captcha for TIN verification.  
**Method:** `GET`

---

### Verify TIN Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/company/tin/getTINdetails`  
**Description:** API to verify TIN details.  
**Method:** `POST`

---

### Get Banks for IFSC
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/getBanks`  
**Description:** API to get the list of banks for IFSC search.  
**Method:** `GET`

---

### Get States for IFSC
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/getStates`  
**Description:** API to get the list of states for IFSC search.  
**Method:** `GET`

---

### Get Districts for IFSC
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/getDistricts`  
**Description:** API to get the list of districts for IFSC search.  
**Method:** `GET`

---

### Get Branches for IFSC
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/getBranches`  
**Description:** API to get the list of branches for IFSC search.  
**Method:** `GET`

---

### Get IFSC Code
**Endpoint:** `https://verifyde.onrender.com/api/v1/professional/IFSC/get_ifsc_code`  
**Description:** API to get the IFSC code based on branch and location.  
**Method:** `GET`

---

### DL Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/dl/getCaptcha`  
**Description:** API to get captcha for driving license verification.  
**Method:** `GET`
<!-- D:\Shubham\My Projects\Flutter Applications\Verifyed---Ridobiko\lib\kyc_components -->
---

### Verify DL Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/dl/get-vehicle-details`  
**Description:** API to verify driving license details.  
**Method:** `POST`
**Payload** {
            'sessionId': sessionId,
            'dlno': dlController.text,
            'dob': dobController.text,
            'captchaData': captchaController.text,
          }

---

### Ration Card Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/ration/getCaptcha`  
**Description:** API to get captcha for ration card verification.  
**Method:** `GET`

---

### Verify Ration Card Details
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/ration/getRationCardDet`  
**Description:** API to verify ration card details.  
**Method:** `POST`

---

### Save PAN Entity
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/pan/saveEntity`  
**Description:** API to save a PAN entity for verification.  
**Method:** `POST`
**Payload** {
          'panNumber': panNumber, <!-- The names which are not in inverted commas are variables others are constant -->
          'fullName': fullName,
          'dob': dob, <!-- yyyy-mm-DD -->
          'mobNo': mobileNumber,
          'areaCd': '91',
          'serviceName': 'verifyYourPanService',
          'formName': 'FO-009-VYPAN',
          'email': userEmail, 
        }

---

### Validate PAN OTP
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/pan/validateOTP`  
**Description:** API to validate OTP for PAN verification.  
**Method:** `POST`
**Payload** {
            'otp': otp,
            'reqId': reqId,
        }

---

### Voter ID Captcha
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/electoral/captcha`  
**Description:** API to get captcha for voter ID verification.  
**Method:** `GET`

---

### Verify Voter ID
**Endpoint:** `https://verifyde.onrender.com/api/v1/NID/electoral/electoral-search`  
**Description:** API to verify voter ID details.  
**Method:** `POST`
**Payload** {
      'epicNumber': epicNumber,
      'stateCd': stateValue,
      'captchaData': captchaData,
      'captchaId': captchaId
    }
**StateValuesToShow** {
    'Select Your State': 'NA',
    'Andaman & Nicobar Islands': 'U01',
    'Andhra Pradesh': 'S01',
    'Arunachal Pradesh': 'S02',
    'Assam': 'S03',
    'Bihar': 'S04',
    'Chandigarh': 'U02',
    'Chattisgarh': 'S26',
    'Dadra & Nagar Haveli and Daman & Diu': 'U03',
    'Goa': 'S05',
    'Gujarat': 'S06',
    'Haryana': 'S07',
    'Himachal Pradesh': 'S08',
    'Jammu and Kashmir': 'U08',
    'Jharkhand': 'S27',
    'Karnataka': 'S10',
    'Kerala': 'S11',
    'Ladakh': 'U09',
    'Lakshadweep': 'U06',
    'Madhya Pradesh': 'S12',
    'Maharashtra': 'S13',
    'Manipur': 'S14',
    'Meghalaya': 'S15',
    'Mizoram': 'S16',
    'Nagaland': 'S17',
    'NCT OF Delhi': 'U05',
    'Odisha': 'S18',
    'Puducherry': 'U07',
    'Punjab': 'S19',
    'Rajasthan': 'S20',
    'Sikkim': 'S21',
    'Tamil Nadu': 'S22',
    'Telangana': 'S29',
    'Tripura': 'S23',
    'Uttar Pradesh': 'S24',
    'Uttarakhand': 'S28',
    'West Bengal': 'S25'
  }

---

## Node.js Server API Endpoints

### Verify Passport Status
**Endpoint:** `https://verifyde-node.onrender.com/api/passport-status`  
**Description:** API to verify passport status.  
**Method:** `POST`
**Payload** {'fileNo': fileNo, 'applDob': dob}

---

### Verify RC Details
**Endpoint:** `https://verifyde-node.onrender.com/getRcDetails`  
**Description:** API to verify RC (Registration Certificate) details.  
**Method:** `POST`
**Payload** {"vehicleNumber": "PB10GG8036"}

---

## eChallan API Endpoints

### Challan Sign In
**Endpoint:** `https://echallan-8fx1.onrender.com/signInWithMobile`  
**Description:** API to sign in using mobile for eChallan services.  
**Method:** `POST`

---

### Challan Submit OTP
**Endpoint:** `https://echallan-8fx1.onrender.com/submitOtp`  
**Description:** API to submit OTP for eChallan services.  
**Method:** `POST`

---

### Get Challan Details
**Endpoint:** `https://echallan-8fx1.onrender.com/getChallanDetails`
**Description:** API to get details of an eChallan.  
**Method:** `POST`

---

### Challan User Dispose
**Endpoint:** `https://echallan-8fx1.onrender.com/dispose`  
**Description:** API to dispose of an eChallan.  
**Method:** `POST`

### Apache Server API Endpoints

#### Credit Operation  
**Endpoint:** `https://twowheelerrental.in/kyc/credit_operations.php`  
**Description:** API to perform credit operations.  
**Method:** `POST`

---

#### Store Transaction  
**Endpoint:** `https://twowheelerrental.in/kyc/store_transaction.php`  
**Description:** API to store transaction details.  
**Method:** `POST`

---

#### Get Voter ID KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getVoterIDKYCCount.php`  
**Description:** API to get the KYC count for voter ID verification.  
**Method:** `POST`

---

#### Get Passport KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getPassportKYCCount.php`  
**Description:** API to get the KYC count for passport verification.  
**Method:** `POST`

---

#### Get PAN Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getPANVerificationCounts.php`  
**Description:** API to get the count of PAN verifications.  
**Method:** `POST`

---

#### Get DL KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getDLKYCCount.php`  
**Description:** API to get the KYC count for driving license verification.  
**Method:** `POST`

---

#### Get RC KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getRCKYCCount.php`  
**Description:** API to get the KYC count for RC (Registration Certificate) verification.  
**Method:** `POST`

---

#### Get Challan Check Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getChallanKYCCount.php`  
**Description:** API to get the KYC count for challan verification.  
**Method:** `POST`

---

#### Get IFSC Check Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getIFSCKYCCount.php`  
**Description:** API to get the KYC count for IFSC code verification.  
**Method:** `POST`

---

#### Get CA KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getCAKYCCount.php`  
**Description:** API to get the KYC count for Chartered Accountant verification.  
**Method:** `POST`

---

#### Get GST KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getGSTKYCCount.php`  
**Description:** API to get the KYC count for GST verification.  
**Method:** `POST`

---

#### Get TIN KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getTINKYCCount.php`  
**Description:** API to get the KYC count for TIN verification.  
**Method:** `POST`

---

#### Get CIN KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getCINKYCCount.php`  
**Description:** API to get the KYC count for CIN (Corporate Identification Number) verification.  
**Method:** `POST`

---

#### Get DIN KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getDINKYCCount.php`  
**Description:** API to get the KYC count for DIN (Director Identification Number) verification.  
**Method:** `POST`

---

#### Get Dentist KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getDentistKYCCount.php`  
**Description:** API to get the KYC count for dentist verification.  
**Method:** `POST`

---

#### Get Doctor KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getDoctorKYCCount.php`  
**Description:** API to get the KYC count for doctor verification.  
**Method:** `POST`

---

#### Get Nurse KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getNurseKYCCount.php`  
**Description:** API to get the KYC count for nurse verification.  
**Method:** `POST`

---

#### Get Ration Card Check Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getRationCardKYCCount.php`  
**Description:** API to get the KYC count for ration card verification.  
**Method:** `POST`

---

#### Get Digilocker KYC Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getDigilockerKYCCount.php`  
**Description:** API to get the KYC count for Digilocker verification.  
**Method:** `POST`

---

#### Get FSSAI Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getbFssaiVerificationCount.php`  
**Description:** API to get the KYC count for FSSAI verification.  
**Method:** `POST`

---

#### Get Disability UDID Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getUDIDVerificationCount.php`  
**Description:** API to get the KYC count for disability UDID verification.  
**Method:** `POST`

---

#### Get Aadhaar PAN Linkage Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getAadhaarPANLinkageVerificationCount.php`  
**Description:** API to get the KYC count for Aadhaar and PAN linkage verification.  
**Method:** `POST`

---

#### Get Udyam Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getUdyamVerificationCount.php`  
**Description:** API to get the KYC count for Udyam verification.  
**Method:** `POST`

---

#### Get School Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getSchoolVerificationCount.php`  
**Description:** API to get the KYC count for school verification.  
**Method:** `POST`

---

#### Get Startup Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getStartupVerificationCount.php`  
**Description:** API to get the KYC count for startup verification.  
**Method:** `POST`

---

#### Get Email Verification Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getEmailVerificationCount.php`  
**Description:** API to get the KYC count for email verification.  
**Method:** `POST`

---

#### Get IFSC Search Count  
**Endpoint:** `https://twowheelerrental.in/kyc/getIFSCSearchCount.php`  
**Description:** API to get the count of IFSC searches.  
**Method:** `POST`

---

### Insert and Get History API Endpoints

### History Endpoints

---

#### Insert CA History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_ca_history.php`  
**Description:** API to insert CA (Chartered Accountant) verification history.  
**Method:** `POST`

#### Get CA History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_ca_history.php`  
**Description:** API to retrieve CA verification history.  
**Method:** `POST`

---

#### Insert FSSAI History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_fssai_history.php`  
**Description:** API to insert FSSAI (Food Safety and Standards Authority of India) verification history.  
**Method:** `POST`

#### Get FSSAI History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_fssai_history.php`  
**Description:** API to retrieve FSSAI verification history.  
**Method:** `POST`

---

#### Insert Email Validation History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_email_history.php`  
**Description:** API to insert email validation history.  
**Method:** `POST`

#### Get Email Validation History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_email_history.php`  
**Description:** API to retrieve email validation history.  
**Method:** `POST`

---

#### Insert Startup Verification History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_startup_history.php`  
**Description:** API to insert startup verification history.  
**Method:** `POST`

#### Get Startup Verification History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_startup_history.php`  
**Description:** API to retrieve startup verification history.  
**Method:** `POST`

---

#### Insert Disability History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_disability_history.php`  
**Description:** API to insert disability verification history.  
**Method:** `POST`

#### Get Disability History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_disability_history.php`  
**Description:** API to retrieve disability verification history.  
**Method:** `POST`

---

#### Insert Aadhaar-PAN Linkage History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_AadhaarPANLinkage_history.php`  
**Description:** API to insert Aadhaar-PAN linkage verification history.  
**Method:** `POST`

#### Get Aadhaar-PAN Linkage History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_AadhaarPANLinkage_history.php`  
**Description:** API to retrieve Aadhaar-PAN linkage verification history.  
**Method:** `POST`

---

#### Insert CIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_CIN_history.php`  
**Description:** API to insert CIN (Corporate Identification Number) verification history.  
**Method:** `POST`

#### Get CIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_CIN_history.php`  
**Description:** API to retrieve CIN verification history.  
**Method:** `POST`

---

#### Insert DIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_din_history.php`  
**Description:** API to insert DIN (Director Identification Number) verification history.  
**Method:** `POST`

#### Get DIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_din_history.php`  
**Description:** API to retrieve DIN verification history.  
**Method:** `POST`

---

#### Insert Dentist History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_dentist_history.php`  
**Description:** API to insert dentist verification history.  
**Method:** `POST`

#### Get Dentist History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_dentist_history.php`  
**Description:** API to retrieve dentist verification history.  
**Method:** `POST`

---

#### Insert DL History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_dl_history.php`  
**Description:** API to insert driving license verification history.  
**Method:** `POST`

#### Get DL History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_dl_history.php`  
**Description:** API to retrieve driving license verification history.  
**Method:** `POST`

---

#### Insert Doctor History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_doctor_history.php`  
**Description:** API to insert doctor verification history.  
**Method:** `POST`

#### Get Doctor History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_doctor_history.php`  
**Description:** API to retrieve doctor verification history.  
**Method:** `POST`

---

#### Insert Challan History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_challan_history.php`  
**Description:** API to insert challan verification history.  
**Method:** `POST`

#### Get Challan History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_challan_history.php`  
**Description:** API to retrieve challan verification history.  
**Method:** `POST`

---

#### Insert GST History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_gst_history.php`  
**Description:** API to insert GST (Goods and Services Tax) verification history.  
**Method:** `POST`

#### Get GST History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_gst_history.php`  
**Description:** API to retrieve GST verification history.  
**Method:** `POST`

---

#### Insert IFSC History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_ifsc_history.php`  
**Description:** API to insert IFSC (Indian Financial System Code) verification history.  
**Method:** `POST`

#### Get IFSC History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_ifsc_history.php`  
**Description:** API to retrieve IFSC verification history.  
**Method:** `POST`

---

#### Insert Nurse History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_nurse_history.php`  
**Description:** API to insert nurse verification history.  
**Method:** `POST`

#### Get Nurse History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_nurse_history.php`  
**Description:** API to retrieve nurse verification history.  
**Method:** `POST`

---

#### Insert PAN History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_pan_history.php`  
**Description:** API to insert PAN (Permanent Account Number) verification history.  
**Method:** `POST`

#### Get PAN History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_pan_history.php`  
**Description:** API to retrieve PAN verification history.  
**Method:** `POST`

---

#### Insert Passport History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_passport_history.php`  
**Description:** API to insert passport verification history.  
**Method:** `POST`

#### Get Passport History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_passport_history.php`  
**Description:** API to retrieve passport verification history.  
**Method:** `POST`

---

#### Insert Ration History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_ration_card_history.php`  
**Description:** API to insert ration card verification history.  
**Method:** `POST`

#### Get Ration History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_ration_card_history.php`  
**Description:** API to retrieve ration card verification history.  
**Method:** `POST`

---

#### Insert RC History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_rc_details.php`  
**Description:** API to insert registration certificate (RC) verification history.  
**Method:** `POST`

#### Get RC History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_rc_details.php`  
**Description:** API to retrieve registration certificate (RC) verification history.  
**Method:** `POST`

---

#### Insert TIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_tin_history.php`  
**Description:** API to insert TIN (Taxpayer Identification Number) verification history.  
**Method:** `POST`

#### Get TIN History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_tin_history.php`  
**Description:** API to retrieve TIN verification history.  
**Method:** `POST`

---

#### Insert Search IFSC History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_searchIFSC_history.php`  
**Description:** API to insert search IFSC verification history.  
**Method:** `POST`

#### Get Search IFSC History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_searchIFSC_history.php`  
**Description:** API to retrieve search IFSC verification history.  
**Method:** `POST`

---

#### Insert Voter History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_kyc_app.php`  
**Description:** API to insert voter ID verification history.  
**Method:** `POST`

#### Get Voter History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_kyc_app.php`  
**Description:** API to retrieve voter ID verification history.  
**Method:** `POST`

---

#### Insert Udyam History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_udyam_history.php`  
**Description:** API to insert Udyam verification history.  
**Method:** `POST`

#### Get Udyam History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_udyam_history.php`  
**Description:** API to retrieve Udyam verification history.  
**Method:** `POST`

---

#### Insert School History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_school_history.php`  
**Description:** API to insert school verification history.  
**Method:** `POST`

#### Get School History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_school_history.php`  
**Description:** API to retrieve school verification history.  
**Method:** `POST`

---

#### Insert Virtual Court Challan History  
**Endpoint:** `https://twowheelerrental.in/kyc/insert_challan_virtual_court_history.php`  
**Description:** API to insert virtual court challan verification history.  
**Method:** `POST`

#### Get Virtual Court Challan History  
**Endpoint:** `https://twowheelerrental.in/kyc/get_challan_virtual_court_history.php`  
**Description:** API to retrieve virtual court challan verification history.  
**Method:** `POST`
