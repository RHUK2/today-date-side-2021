import styled from 'styled-components';
import Layout from '../layouts/Layout';
import Loader from '../components/Loader';
import Slider from 'react-slick';
import Moment from 'react-moment';

const S = {};

S.Section = styled.section`
  min-height: 100vh;
  max-width: 800px;
  margin: 80px auto 0px auto;
  padding: 5rem 0;

  /* background-color: teal; */
`;

S.InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0.8rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

S.IconTextBox = styled.div`
  display: flex;
  font-size: 1.8rem;
  i {
    position: relative;
    top: -0.3rem;
  }
  span {
    margin-left: 1rem;
  }
`;

S.Date = styled.span`
  font-size: 1.5rem;
`;

S.Title = styled.h1`
  font-size: 5rem;
  padding: 2rem 1rem 1.8rem;
  background-color: #fcf4a3;
`;

S.SliderBox = styled.div`
  padding: 3rem 5rem;
  margin-bottom: 2rem;

  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

S.Slider = styled(Slider)`
  img {
    height: 300px;
    object-fit: contain;
  }
  .slick-prev::before,
  .slick-next::before {
    color: black;
    font-size: 3rem;
  }
`;

S.Description = styled.p`
  margin-top: 1rem;
  padding: 1rem;
  min-height: 500px;

  font-size: 2rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
`;

function PostDetail({ isLoading, data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <S.Section>
          <S.InfoBox>
            <S.IconTextBox>
              <i className="fas fa-user"></i>
              <span>{data.creator.nickname}</span>
            </S.IconTextBox>
            <S.Date>
              <Moment format="YYYY년 MM월 DD일 hh시 mm분">{data.Date}</Moment>
            </S.Date>
          </S.InfoBox>
          <S.Title>{data.title}</S.Title>
          <S.SliderBox>
            <S.Slider {...settings}>
              {data.imgURL.map((URL, idx) => (
                <img key={idx} src={URL} alt="" />
              ))}
            </S.Slider>
          </S.SliderBox>
          <S.IconTextBox>
            <i className="fas fa-compass"></i>
            <span>{data.area}</span>
          </S.IconTextBox>
          <S.Description>{data.description}</S.Description>
        </S.Section>
      )}
    </Layout>
  );
}

export default PostDetail;
