import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MlkmList } from "./mlkm/MlkmList";
import { MlkmCreate } from "./mlkm/MlkmCreate";
import { MlkmEdit } from "./mlkm/MlkmEdit";
import { MlkmShow } from "./mlkm/MlkmShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"jkk.jnk.n"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Mlkm"
          list={MlkmList}
          edit={MlkmEdit}
          create={MlkmCreate}
          show={MlkmShow}
        />
      </Admin>
    </div>
  );
};

export default App;
