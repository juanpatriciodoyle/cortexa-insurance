import React, {useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import ClaimsLayout from '../components/claims/ClaimsLayout';
import Step1Welcome from '../components/claims/Step1Welcome';

function ThirdPartyClaimsPage() {
    const [step, setStep] = useState(1);
    const [claimData, setClaimData] = useState({});

    const handleStep1Complete = (plate: string) => {
        setClaimData({...claimData, plate});
        setStep(2);
    };

    return (
        <ClaimsLayout>
            <AnimatePresence mode="wait">
                {step === 1 && <Step1Welcome onComplete={handleStep1Complete}/>}
            </AnimatePresence>
        </ClaimsLayout>
    );
}

export default ThirdPartyClaimsPage;