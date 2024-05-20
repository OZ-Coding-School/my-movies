import styled from "styled-components";

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: flex-start;
`;

const CastTileDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CastTileImage = styled.img`
  flex: 0 0 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  margin: 0;
  color: #333;
  font-size: 14px;
`;

const Character = styled.p`
  margin: 0;
  color: #666;
  font-style: italic;
`;

export default function CastTile(props) {
  return (
    <CastTileDiv>
      <CastTileImage
        src={
          props.person.profile_path
            ? `https://image.tmdb.org/t/p/w200/${props.person.profile_path}`
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt={`Profile of ${props.person.original_name}`}
      />
      <Info>
        <Name>{props.person.original_name}</Name>
        <Character>{props.person.character}</Character>
      </Info>
    </CastTileDiv>
  );
}
