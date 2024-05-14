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
    <S.AsideExpandInfo>
      <S.AsideIcon src={iconSrc} />
      <S.AsideExpandName>{name}</S.AsideExpandName>
    </S.AsideExpandInfo>
  );
};

export default AsideExpandElem;
