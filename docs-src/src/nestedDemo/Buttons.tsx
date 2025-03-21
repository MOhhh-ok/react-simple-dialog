import { HideFunction, showModal, showModeless, showPopover } from "react-light-dialog";
import { TestDialog } from "./TestDialog";

export function Buttons(props: { depth: number, hide?: HideFunction | undefined }) {
  const { depth } = props;

  async function handleClick(type: 'popover' | 'modal' | 'modeless') {
    const fncs = {
      'popover': showPopover,
      'modal': showModal,
      'modeless': showModeless
    }
    const res = await fncs[type](({ hide }) => <TestDialog payload={{ depth: depth + 1, type }} hide={hide as any} />);
  }

  return <div>
    <button onClick={() => handleClick('popover')}>PopOver</button>
    <button onClick={() => handleClick('modal')}>Modal</button>
    <button onClick={() => handleClick('modeless')}>Modeless</button>
    {props.hide && <button onClick={props.hide}>Hide</button>}
  </div>
}