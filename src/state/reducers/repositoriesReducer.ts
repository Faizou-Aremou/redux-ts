import { Action } from '../action';
import { ActionType } from '../action-type';

interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: true, error: null, data: action.payload as string[] };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: true, error: action.payload as string, data: [] };
    default:
      return state;
  }
};

export default reducer;
