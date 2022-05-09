import React, { useEffect } from 'react';
import * as main from './MainElements';
import SwiperComponents from '../../components/swipers/Swiper';
import * as DateFunction from '../../components/common/DateFunction';
import { useQuery, gql } from '@apollo/client';

const Main = () => {

  const selectTodo = gql`
        query listInnohis {
            listEventData {
                items {
                    endDate
                    id
                    img
                    item
                    link
                    startDate
                }
        }
        }
  `;

  const { loading, data } = useQuery(selectTodo);

  const arrOrder = (key) => {
    return (a, b) => {
      if (a[key] > b[key]) {
        return 1;
      } else if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    }
  }

  const ClassificationData = () => {
    let ingData = [];
    let comeData = [];
    let finishData = [];

    const today = DateFunction.getToday('yyyymmdd');

    if (loading) {
      return false;

    } else {

      data.listEventData.items.map((i) => {
        if (today < i.startDate) {      //예정 today() < startdate 
          return comeData.push(i);
        } else if (i.endDate < today) { // 마감 endate < today()
          return finishData.push(i);
        } else {                        // 진행중 startdate <= today() <= enddate
          return ingData.push(i);
        }
      })

      ingData.sort(arrOrder('startDate'));
      comeData.sort(arrOrder('startDate'));
      finishData.sort(arrOrder('startDate'));

      const GridData = (param) => {
        return param.dataSet.map(i => {
          return (
            <div key={i.item} className="swiper-slide"><a href={i.link} target="_blank" rel="noopener noreferrer"><img src={require(`../../assets/img/${i.img}`).default} className="img-fluid" style={{ width: "320px", height: "200px" }} alt=""></img></a></div>
          )
        })
      }

      const count = 5 - ingData.length;

      if (count > 0) {
        return (
          <>
            <GridData dataSet={ingData} />
            <GridData dataSet={comeData.slice(0, count)} />
          </>
        )
      } else {
        return (
          <GridData dataSet={ingData.slice(0, 5)} />
        )
      }
    }

  }


  const ClientsElements = () => {
    return (
      <>
        <section id="clients" className="clients">
          <div className="container" data-aos="fade-up">
            <header className="header-font">
              <h4>지금, 이 행사 어때요?</h4>
              <p>이노하이가 추천하는 놓쳐선 안 될 행사</p>
            </header>

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <ClassificationData />
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>
      </>
    )
  }

  useEffect(() => {
    SwiperComponents();
  })

  return (
    <>
      {main.heroElements}
      <main id='main'>
        {main.serviceElements}
        <ClientsElements />
      </main>

    </>
  );

}

export default Main;
