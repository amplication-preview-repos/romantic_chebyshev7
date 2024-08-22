import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { DetectedFaceTitle } from "../detectedFace/DetectedFaceTitle";

export const RecognizedFaceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="detectedFace.id"
          reference="DetectedFace"
          label="detectedFace"
        >
          <SelectInput optionText={DetectedFaceTitle} />
        </ReferenceInput>
        <TextInput label="personId" source="personId" />
        <DateTimeInput label="recognitionDate" source="recognitionDate" />
        <NumberInput label="recognitionScore" source="recognitionScore" />
      </SimpleForm>
    </Create>
  );
};
