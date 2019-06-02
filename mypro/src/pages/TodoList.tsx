import * as React from "react";

export interface TodoListProps {}
export interface TodoListState {}

export default class Test extends React.Component<
  TodoListProps,
  TodoListState
> {
  state: TodoListState = {};
  public render() {
    return <div />;
  }
}
