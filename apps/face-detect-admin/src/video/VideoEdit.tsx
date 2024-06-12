import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DetectedFaceTitle } from "../detectedFace/DetectedFaceTitle";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="detectedFaces"
          reference="DetectedFace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DetectedFaceTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="fileName" source="fileName" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Edit>
  );
};
