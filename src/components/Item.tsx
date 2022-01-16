import { memo } from "react";

interface ItemProps {
  title: string;
}

function ItemComponent(props: ItemProps) {
  return <li>{props.title}</li>;
}

export default memo(ItemComponent);
