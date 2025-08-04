import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from '../../styles/Text';
import Button from '../ui/Button';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, ArrowLeft } from 'lucide-react';
import { useTheme } from 'styled-components';
import { CortexaTheme } from '../../styles/theme';

const UploadWrapper = styled(motion.div)`
    text-align: center;
`;

const DropzoneContainer = styled.div<{ isDragActive: boolean }>`
    margin-top: 32px;
    border: 2px dashed ${({ theme, isDragActive }) => (isDragActive ? theme.colors.primary : theme.colors.borders)};
    border-radius: ${({ theme }) => theme.sizing.borderRadius.cards};
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.3s ease, background-color 0.3s ease;
    background-color: ${({ theme, isDragActive }) => (isDragActive ? theme.colors.subtleBackground : 'transparent')};
`;

const ThumbnailGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
    margin-top: 24px;
`;

const Thumbnail = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
    overflow: hidden;
`;

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RemoveButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

const FormButton = styled(Button)`
    width: 50%;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textBody};
    margin-bottom: 24px;
    padding: 0;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

interface Step3UploadPhotosProps {
    onComplete: (files: File[]) => void;
    onBack: () => void;
}

function Step3UploadPhotos({ onComplete, onBack }: Step3UploadPhotosProps) {
    const theme = useTheme() as CortexaTheme;
    const [files, setFiles] = useState<File[]>([]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => {
            setFiles(prev => [...prev, ...acceptedFiles]);
        },
    });

    const removeFile = (fileToRemove: File) => {
        setFiles(files.filter(file => file !== fileToRemove));
    };

    const handleSubmit = () => {
        onComplete(files);
    };

    return (
        <UploadWrapper
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            <BackButton onClick={onBack}>
                <ArrowLeft size={16} />
                <Text $variant="button">Back</Text>
            </BackButton>
            <Text as="h2" $variant="h2">Show us the damage</Text>
            <Text as="p" $variant="body" style={{ marginTop: '16px' }}>
                Drag and drop photos here, or click to upload. Please include photos of your vehicle and the other vehicle.
            </Text>

            <DropzoneContainer {...getRootProps()} isDragActive={isDragActive}>
                <input {...getInputProps()} />
                <UploadCloud color={theme.colors.primary} size={48}/>
            </DropzoneContainer>

            {files.length > 0 && (
                <ThumbnailGrid>
                    {files.map((file, index) => (
                        <Thumbnail key={index}>
                            <ThumbnailImage src={URL.createObjectURL(file)} alt={`preview ${index}`}/>
                            <RemoveButton onClick={() => removeFile(file)}>
                                <X size={16}/>
                            </RemoveButton>
                        </Thumbnail>
                    ))}
                </ThumbnailGrid>
            )}

            <ButtonContainer>
                <FormButton
                    $variant="primary"
                    onClick={handleSubmit}
                    disabled={files.length === 0}
                    disabledTooltip="Please upload at least one photo"
                >
                    Continue
                </FormButton>
            </ButtonContainer>
        </UploadWrapper>
    );
}

export default Step3UploadPhotos;