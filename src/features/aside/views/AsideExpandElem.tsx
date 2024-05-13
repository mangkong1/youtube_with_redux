import S from "../styles";

interface Props {
  data: {
    iconSrc: string;
    name: string;
  };
}

const AsideExpandElem = (props: Props) => {
  const { iconSrc, name } = props.data;

  return (
    <S.AsideInfo>
      <S.AsideIcon src={iconSrc} />
      <S.AsideName>{name}확장aside바입니다</S.AsideName>
    </S.AsideInfo>
  );
};

export default AsideExpandElem;
