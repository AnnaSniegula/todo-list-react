import { useQueryParameter, useReplaceQueryParameter } from "../TasksPage/queryParameters";
import Input from "../Input";
import searchQueryParamName from "../TasksPage/searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;