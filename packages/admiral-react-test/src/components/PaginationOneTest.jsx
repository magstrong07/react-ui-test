import React, { useState } from 'react';
import { PaginationOne, Field } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Container = styled.div`
  padding: 14px;
  position: relative;
  display: block;
  width: 400px;
  > * {
    margin: 8px 50px 50px 0;
  }
`;
const Separator = styled.div`
  height: 40px;
`;

const PaginationOneTest = () => {
  const [pageSize1, setPageSize1] = useState(8);
  const [page1, setPage1] = useState(1);
  const [pageSize2, setPageSize2] = useState(8);
  const [page2, setPage2] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;
  return (
    <div>
      <Container>
        <Field label="Pagination One Complex">
          <PaginationOne
            onChange={({ page, pageSize }) => {
              setPage1(page);
              setPageSize1(pageSize);
            }}
            page={page1}
            pageSize={pageSize1}
            totalItems={totalElements}
            pageSizes={pageSizes}
          />
        </Field>
        <Separator />
        <Field label="Pagination One Complex. Minimal size">
          <PaginationOne
            style={{ width: 'fit-content' }}
            onChange={({ page, pageSize }) => {
              setPage1(page);
              setPageSize1(pageSize);
            }}
            page={page1}
            pageSize={pageSize1}
            totalItems={totalElements}
            pageSizes={pageSizes}
          />
        </Field>
        <Separator />
        <Field label="Pagination One Simple">
          <PaginationOne
            onChange={({ page, pageSize }) => {
              setPage2(page);
              setPageSize2(pageSize);
            }}
            page={page2}
            pageSize={pageSize2}
            totalItems={totalElements}
            pageSizes={pageSizes}
            simple
          />
        </Field>
        <Separator />
        <Field label="Pagination One Simple. Minimal size">
          <PaginationOne
            style={{ width: 'fit-content' }}
            onChange={({ page, pageSize }) => {
              setPage2(page);
              setPageSize2(pageSize);
            }}
            page={page2}
            pageSize={pageSize2}
            totalItems={totalElements}
            pageSizes={pageSizes}
            simple
          />
        </Field>
      </Container>
    </div>
  );
};

export default PaginationOneTest;
