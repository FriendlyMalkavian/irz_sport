import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sport from '../Sport';

function SportWrapper() {
  const params = useParams();
  const location = useLocation();

  return <Sport id={params.id} data={location.state?.data} />;
}

export default SportWrapper;