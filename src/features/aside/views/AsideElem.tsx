import S from "../styles";

interface Props {
  data: {
    iconSrc: string;
    name: string;
  };
}

const AsideElem = (props: Props) => {
  const { iconSrc, name } = props.data;

  return (
    <S.AsideInfo>
      <S.AsideIcon src={iconSrc} />
      <S.AsideName>{name}</S.AsideName>
    </S.AsideInfo>
  );
};

export default AsideElem;
