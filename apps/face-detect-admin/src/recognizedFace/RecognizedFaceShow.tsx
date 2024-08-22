import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DETECTEDFACE_TITLE_FIELD } from "../detectedFace/DetectedFaceTitle";

export const RecognizedFaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="detectedFace"
          source="detectedface.id"
          reference="DetectedFace"
        >
          <TextField source={DETECTEDFACE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="personId" source="personId" />
        <TextField label="recognitionDate" source="recognitionDate" />
        <TextField label="recognitionScore" source="recognitionScore" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
