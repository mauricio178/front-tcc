import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface IAsideItem{
  icon: any;
  label: string;
  path: string;
}

const AsideItem: React.FC<IAsideItem> = ({ icon, label, path }) => {
  return (
    <Link to={path}>
        {icon}
        <h3> {label} </h3>
    </Link>
  );
}

export default AsideItem;