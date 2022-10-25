import styled from "styled-components";

const ListItemClose = styled.span`
  position: absolute;
  right: 0;
`;

const TaskListItem = styled.li`
  position: relative;
  margin-top: 5px;
  padding-right: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { ListItemClose, TaskListItem };
