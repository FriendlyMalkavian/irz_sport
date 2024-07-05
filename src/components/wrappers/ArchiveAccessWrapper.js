import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ArchiveAccess from '../ArchiveAccess';

function ArchiveAccessWrapper() {
  const params = useParams();
  const location = useLocation();

  console.log('ID из URL:', params.id);
  console.log('Данные из состояния:', location.state?.data);


  return <ArchiveAccess id={params.id} data={location.state?.data} />;
}

export default ArchiveAccessWrapper;