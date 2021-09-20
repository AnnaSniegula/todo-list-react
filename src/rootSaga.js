import { all } from "redux-saga/effects";
import { rootSaga } from "./features/tasks/tasksSaga";
import { tasksSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
}
 