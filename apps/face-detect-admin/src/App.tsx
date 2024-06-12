import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { DetectedFaceList } from "./detectedFace/DetectedFaceList";
import { DetectedFaceCreate } from "./detectedFace/DetectedFaceCreate";
import { DetectedFaceEdit } from "./detectedFace/DetectedFaceEdit";
import { DetectedFaceShow } from "./detectedFace/DetectedFaceShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { RecognizedFaceList } from "./recognizedFace/RecognizedFaceList";
import { RecognizedFaceCreate } from "./recognizedFace/RecognizedFaceCreate";
import { RecognizedFaceEdit } from "./recognizedFace/RecognizedFaceEdit";
import { RecognizedFaceShow } from "./recognizedFace/RecognizedFaceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"face-detect"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="DetectedFace"
          list={DetectedFaceList}
          edit={DetectedFaceEdit}
          create={DetectedFaceCreate}
          show={DetectedFaceShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="RecognizedFace"
          list={RecognizedFaceList}
          edit={RecognizedFaceEdit}
          create={RecognizedFaceCreate}
          show={RecognizedFaceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
