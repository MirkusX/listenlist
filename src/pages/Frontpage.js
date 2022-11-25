import { useContext, useEffect, useState } from "react";
import { DataContext, SearchContext } from "../components/Context";
import {
  InnerMixContainer,
  MixContainer,
  MixList,
  NavDiv,
  StyledA,
  StyledButton,
  StyledImg,
  StyledInput,
  StyledLi,
  StyledListDiv,
  StyledSection,
} from "../components/StyledComponents";
import { FiHeadphones } from "react-icons/fi";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export const Frontpage = () => {
  const storedList = JSON.parse(localStorage.getItem("m1x35")) || [];
  const [list, setList] = useState(storedList);
  const { data } = useContext(DataContext);
  const { search, setSearch } = useContext(SearchContext);
  const removeItem = (index) => {
    const removeList = [...list];
    removeList.splice(index, 1);
    setList(removeList);
  };

  useEffect(() => {
    localStorage.setItem("m1x35", JSON.stringify(list));
  }, [list]);

  const padTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const convertTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor((seconds % 3600) % 60);

    return `${hrs}:${padTime(mins)}:${padTime(mins)}`;
  };
  return (
    <StyledSection>
      <NavDiv>
        <p>Your List</p>
        {list.map((item, index) => {
          return (
            <StyledListDiv key={index}>
              <img src={item.thumbnail} />
              <StyledLi>{item.title}</StyledLi>
              <StyledA href={item.link}>Listen</StyledA>
              <StyledButton red onClick={() => removeItem(index)}>
                Remove
              </StyledButton>
            </StyledListDiv>
          );
        })}
      </NavDiv>
      <MixList>
        <StyledInput
          type="text"
          onChange={(e) => setSearch((search) => (search = e.target.value))}
          placeholder="type to search / see results below"
        />
        {data.map((item, index) => {
          return (
            <MixContainer key={index}>
              <StyledImg src={item.pictures.large} />
              <InnerMixContainer>
                <h1>{item.name}</h1>
                <p>
                  <MdDateRange /> {item.created_time.slice(0, 10)} |{" "}
                  <AiOutlineUser /> {item.user.name} |<MdAccessTime />
                  {convertTime(item.audio_length)} | <FiHeadphones />{" "}
                  {item.play_count}
                </p>
                <StyledA href={item.url}>Listen</StyledA>
              </InnerMixContainer>
              <StyledButton
                onClick={() =>
                  setList([
                    ...list,
                    {
                      title: item.name,
                      link: item.url,
                      thumbnail: item.pictures.thumbnail,
                    },
                  ])
                }
              >
                Add to List
              </StyledButton>
            </MixContainer>
          );
        })}
      </MixList>
    </StyledSection>
  );
};
