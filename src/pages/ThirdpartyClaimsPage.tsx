import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ClaimsLayout from '../components/claims/ClaimsLayout';
import Step1Welcome from '../components/claims/Step1Welcome';
import Step2IncidentDetails from '../components/claims/Step2IncidentDetails';
import Step3UploadPhotos from '../components/claims/Step3UploadPhotos';

export interface ClaimData {
    plate?: string;
    incidentDate?: string;
    location?: string;
    description?: string;
    yourPlate?: string;
    files?: File[];
}

function ThirdPartyClaimsPage() {
    const [step, setStep] = useState(1);
    const [claimData, setClaimData] = useState<ClaimData>({});

    const handleNextStep = (data: Partial<ClaimData>) => {
        setClaimData(prev => ({ ...prev, ...data }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    return (
        <ClaimsLayout>
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <Step1Welcome
                        key="step1"
                        data={claimData}
                        onComplete={(plate) => handleNextStep({ plate })}
                    />
                )}
                {step === 2 && (
                    <Step2IncidentDetails
                        key="step2"
                        data={claimData}
                        onComplete={(details) => handleNextStep(details)}
                        onBack={handleBack}
                    />
                )}
                {step === 3 && (
                    <Step3UploadPhotos
                        key="step3"
                        onComplete={(files) => handleNextStep({ files })}
                        onBack={handleBack}
                    />
                )}
            </AnimatePresence>
        </ClaimsLayout>
    );
}

export default ThirdPartyClaimsPage;