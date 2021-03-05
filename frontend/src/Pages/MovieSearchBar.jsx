import { Button, Form, Input, Row, Col } from 'reactstrap';

const MovieSearchBar = ({ handleQuery, handleSubmit, query }) => {

    return (
        <Form onSubmit={handleSubmit}>
            <Row form>
                <Col md={4}>
                    <Input placeholder="Search Term..." type="text" onChange={handleQuery} value={query} />
                </Col>
                <Col md={8}>
                    <Button type="submit" >Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default MovieSearchBar;