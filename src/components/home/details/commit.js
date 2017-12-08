import { api } from '../../utils';

export function onCommitComment(cmt) {
    let url = `${api}/review/add-get?place_id=5a20ed7d53cba24ff2315244&username=Admin&comment=${cmt}`
}