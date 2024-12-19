import { useState } from 'react';
import { IconNumber10Small } from '@tabler/icons-react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FileButton,
  FileInput,
  Flex,
  Group,
  NumberInput,
  SimpleGrid,
  Stepper,
  TextInput,
  Title,
} from '@mantine/core';
import { Form, isEmail, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import BasicInfoForm from './BasicInfoForm';

export function ProfileForm() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const basicInfoForm = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    validateInputOnChange: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: undefined,
      city: '',
      zipCode: '',
      state: '',
      image: null,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      firstName: (value) => (value.length < 2 ? 'First name must be at least two letters' : null),
      lastName: (value) => (value.length < 2 ? 'Last name must be at least two letters' : null),
      age: (value) =>
        !value || value < 18 ? 'Must be at least 18 years of age to use our platform' : null,
    },
  });
  const isFormValid = basicInfoForm.isValid();

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Basic info" description="Foo">
         <BasicInfoForm
        </Stepper.Step>
        <Stepper.Step label="Running Preferences" description="Foo">
          <form
            onSubmit={basicInfoForm.onSubmit((values) => console.log(values))}
            style={{
              border: '1px solid red',
              padding: 20,
            }}
          ></form>
        </Stepper.Step>
        <Stepper.Step label="Running Preferences" description="Foo">
          <form
            onSubmit={basicInfoForm.onSubmit((values) => console.log(values))}
            style={{
              border: '1px solid red',
              padding: 20,
            }}
          ></form>
        </Stepper.Step>
      </Stepper>
      <Group justify="center" mt="xl">
        {active > 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        <Button onClick={nextStep} disabled={!isFormValid}>
          Next step
        </Button>
      </Group>
    </Box>
  );
}
