import { ListGroupItem, Input} from 'reactstrap';

export const TodoListItem = (props) => {
    return <ListGroupItem className="p-3">
        <Input
            className="mx-2"
            type="checkbox"
            checked={props.item.isComplete}
            onChange={(event) => props.onTaskChanged(event, props.item)}
        />
        {props.item.name}
    </ListGroupItem>

}
