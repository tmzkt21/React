import React, {Component} from "react";
import Navigator from "../common/Navigator";
export default class Home extends Component<any, any>{
  public render() {
      return <div>
          <Navigator/>
          <div id ="Layout">
              <div id="Sidebar">
                  <div id ="SidebarTitle">폴더</div>
                  <div id ="List">
                      <div id ="ListItme">
                          {/*<Link to="/memo">메모</Link>*/}
                      </div>
                      <div id="ListItem">
                          {/*<div id="Link" to="/trash">휴지통</divLink>*/}
                      </div>
                  </div>
              </div>
              <div>
                  <div style={{
                      margin: '10px'
                  }}><div id="AddMemoBtn" /></div>
              </div>
          </div>

      </div>
  }
}


