import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DETECTEDFACE_TITLE_FIELD } from "../detectedFace/DetectedFaceTitle";

export const RecognizedFaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecognizedFaces"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
