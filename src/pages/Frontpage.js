import { useContext, useEffect, useState } from "react";
import { DataContext, SearchContext } from "../components/Context";
import {
  DescContainer,
  InnerMixContainer,
  MixContainer,
  MixList,
  NavDiv,
  OuterList,
  StyledA,
  StyledButton,
  StyledImg,
  StyledInput,
  StyledLi,
  StyledListDiv,
  StyledSection,
} from "../components/StyledComponents";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";

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

  const convertTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);

    if (hrs === 0) {
      return `${mins}m`;
    } else if (mins === 0) {
      return `${hrs}h`;
    } else {
      return `${hrs}h ${mins}m`;
    }
  };
  const [show, setShow] = useState(false);
  return (
    <StyledSection>
      <OuterList>
        {/* Shows overlay on click */}
        <StyledButton overlay onClick={() => setShow(!show)}>
          Show List
        </StyledButton>
        <NavDiv show={show}>
          <p>Your List</p>
          {/* Lists all items user has added to list */}
          {list.map((item, index) => {
            return (
              <StyledListDiv key={index}>
                <img src={item.thumbnail} />
                <StyledLi>{item.title}</StyledLi>
                <StyledA href={item.link} target="_blank">
                  Listen
                </StyledA>
                <StyledButton red onClick={() => removeItem(index)}>
                  Remove
                </StyledButton>
              </StyledListDiv>
            );
          })}
        </NavDiv>
      </OuterList>
      <MixList>
        {/* Finds data based on user input */}
        <StyledInput
          type="text"
          onInput={(e) => setSearch((search) => (search = e.target.value))}
          placeholder="type to search / see results below"
        />
        {/* Lists all relevant data */}
        {data.map((item, index) => {
          if (search === "") {
            return;
          }
          if (item.play_count === 0) {
            item.play_count = "Playcount hidden by uploader";
          }
          return (
            <MixContainer key={index}>
              <StyledImg src={item.pictures.large} />
              <InnerMixContainer>
                <h1>{item.name}</h1>
                <DescContainer>
                  <p>
                    <MdDateRange /> {item.created_time.slice(0, 10)}
                  </p>
                  <p>
                    <AiOutlineUser /> {item.user.name}
                  </p>
                  <p>
                    <MdAccessTime />
                    {convertTime(item.audio_length)}
                  </p>
                  <p>
                    <FiPlay /> {item.play_count}
                  </p>
                </DescContainer>
                <p>
                  <StyledA href={item.url} target="_blank">
                    Listen
                  </StyledA>
                </p>
                {/* Adds data to list on click */}
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
              </InnerMixContainer>
            </MixContainer>
          );
        })}
      </MixList>
    </StyledSection>
  );
};
