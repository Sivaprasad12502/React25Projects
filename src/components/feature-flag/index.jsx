import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import Treeview from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enablesFlags } = useContext(FeatureFlagsContext);

  const compoentToRender = [
    {
      key: "ShowLigthAndDarkMod",
      component: <LightDarkMode />,
    },
    {
      key: "ShowTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "ShowRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "ShowAccordian",
      component: <Accordian />,
    },
    {
      key: "ShowTreeView",
      component: <Treeview menus={menus}/>,
    },
  ];
  function chackEnabledFlags(getCurrenKey) {
    return enablesFlags[getCurrenKey];
  }
  if (loading) return <h2>Loading ! Please wait</h2>;
  return (
    <div>
      <h1>Feture Flags</h1>
      {compoentToRender.map((compoenentItem) =>
        chackEnabledFlags(compoenentItem.key) ? compoenentItem.component : null
      )}
    </div>
  );
}
