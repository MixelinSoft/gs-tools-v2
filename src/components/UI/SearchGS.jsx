import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const SearchGS = (props) => {
  return (
    <>
      <Form.Control
        type='text'
        placeholder={'Test'}
        value={props.value}
        onChange={props.onChange}
        required
      />
      {props.results.length > 0 ? (
        <ListGroup>
          {props.results.map((result) => {
            return (
              <ListGroup.Item
                onClick={() => props.onSelectGS(result.gsId)}
                as='button'
                key={result.gsId}>
                {`АЗС№ ${result.gsNumber}, ${result.address}`}
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

export default SearchGS;
