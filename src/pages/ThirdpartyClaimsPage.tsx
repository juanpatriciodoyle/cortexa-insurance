import React, {useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import ClaimsLayout from '../components/claims/ClaimsLayout';
import Step1Welcome from '../components/claims/Step1Welcome';
import Step2IncidentDetails from '../components/claims/Step2IncidentDetails';
import Step3UploadPhotos from '../components/claims/Step3UploadPhotos';

function ThirdPartyClaimsPage() {
    const [step, setStep] = useState(1);
    const [claimData, setClaimData] = useState({});

    const handleStep1Complete = (plate: string) => {
        setClaimData({...claimData, plate});
        setStep(2);
    };

    const handleStep2Complete = (details: object) => {
        setClaimData({...claimData, ...details});
        setStep(3);
    };

    const handleStep3Complete = (files: File[]) => {
        setClaimData({...claimData, files});
        setStep(4);
    };

    return (
        <ClaimsLayout>
            <AnimatePresence mode="wait">
                {step === 1 && <Step1Welcome key="step1" onComplete={handleStep1Complete}/>}
                {step === 2 && <Step2IncidentDetails key="step2" onComplete={handleStep2Complete}/>}
                {step === 3 && <Step3UploadPhotos key="step3" onComplete={handleStep3Complete}/>}
            </AnimatePresence>
        </ClaimsLayout>
    );
}

export default ThirdPartyClaimsPage;