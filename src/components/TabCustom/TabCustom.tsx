import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "./TabCustom.style";
import TabPanel from "./component/TabPanel";
import AntTab from "./component/AntTab";
import AntTabs from "./component/AntTabs";
import { convertArrayToObj } from "../../utils/converArrayToJs";

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
type obj = {
  name: string;
  component: React.ReactNode;
  index: number;
};
interface ITabCustomProps {
  data: obj[];
}

const TabCustom: FC<ITabCustomProps> = ({ data }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const TabsName: any[] = data.reduce(
    (previousValue: any[], currentValue: any, currentIndex: number) => {
      const list: any = {};
      list.name = currentValue.name;
      list.index = currentValue.index;
      return [...previousValue, list];
    },
    []
  );
  console.log(data, TabsName, "--   --");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <AntTabs
          className={classes.Tabs}
          value={value}
          onChange={handleChange}
          /* indicatorColor="primary" */
          /* textColor="primary"
          variant="standard"
          scrollButtons="auto" */
          aria-label="scrollable auto tabs example"
        >
          {TabsName.map((item, index) => {
            return (
              <AntTab
                key={index}
                className={classes.tab}
                label={item.name}
                {...a11yProps(item.index)}
              />
            );
          })}
        </AntTabs>
      </AppBar>

      {data.map((Comp: any, index: number) => {
        return (
          <TabPanel key={index} value={value} index={Comp.index}>
            <Comp.component />
          </TabPanel>
        );
      })}
    </div>
  );
};
export default TabCustom;
