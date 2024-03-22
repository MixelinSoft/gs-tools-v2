import ListGroup from 'react-bootstrap/ListGroup';

const SearchGSResults = (props) => {
  return (
    <>
      {props.results.length > 0 ? (
        <ListGroup>
          {props.results.map((result) => {
            return (
              <ListGroup.Item
                onClick={() => props.onSelectGS(result.gsId)}
                as='button'
                key={result.gsId}>
                {`${result.gsFirm} АЗС№ ${result.gsNumber}, ${result.address}`}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        ''
      )}
    </>
  );
};

export default SearchGSResults;
