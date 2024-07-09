import MultiDimList from './MultiDimList';

export default (props) => {
  const { data, simpleCfgList } = props;
  const { property } = data || {};
  return (
    <>
      {property === 'multiDimList/customList' && (
        <MultiDimList currentParamInfo={data} simpleCfgList={simpleCfgList} />
      )}
    </>
  );
};
