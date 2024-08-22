import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { DetectedFaceTitle } from "../detectedFace/DetectedFaceTitle";

export const RecognizedFaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
