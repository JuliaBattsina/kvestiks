import React from "react";
import { Breadcrumb, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content.scss";
import men from "./men.png";
import payment from "./payment.png";

function Content() {
  return (
    <div className="all">
      <div className="main-content">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item active>Главная</Breadcrumb.Item>
          <span className="breadcrumb-separator">→</span>
          <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content-container">
        <div className="discriptions">
          <div className="disc">
            <Col xs={12} md={6} className="left-column">
              <h1 className="title">Стрелы Амура, 18+</h1>
              <div className="button-group">
                <Button variant="light" className="button-light">
                  квест
                </Button>
                <Button variant="light" className="button-light">
                  для 2 человек
                </Button>
                <Button variant="light" className="button-light">
                  для дома
                </Button>
                <Button variant="light" className="button-light">
                  сложность 7/10
                </Button>
              </div>
              <div className="description">
                <p>
                  Романтический квест по поиску подарка для второй половинки:
                  мужа, жены, парня или девушки. Чтобы собрать 7 стрел бога
                  любви Амура и разыскать подарок, игроку нужно выполнить
                  задания древних богов.
                </p>
              </div>
            </Col>
            <div className="images">
              <Col xs={12} md={6} className="image-container">
                <img src={men} alt="Quest" className="quest-image" />
                <div className="overlay" />
                <div className="popular-tag">самый популярный</div>
              </Col>
            </div>
          </div>

          <div className="reviews-section">
            <p className="reviews-title">
              Отзывы клиентов <sup className="reviews-count">182</sup>
            </p>

            <Row className="g-4 overflow-x-auto review-row">
              <div className="d-flex flex-nowrap">
                {[...Array(3)].map((_, index) => (
                  <Col key={index} className="review-column">
                    <Card className="review-card">
                      <Card.Body>
                        <Card.Subtitle className="review-date">
                          14 февраля 2024
                        </Card.Subtitle>
                        <Card.Text className="review-player">
                          Костантин (12 игроков 35-60 лет)
                        </Card.Text>
                        <div className="review-rating">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className="star">
                              ★
                            </span>
                          ))}
                        </div>
                        <Card.Title className="review-title">
                          День святого Валентина
                        </Card.Title>
                        <Card.Text className="review-text">
                          Понравилось, что вопросы хоть и объединены одной
                          темой, были не похожи друг на друга. Разные страны и
                          эпохи – есть где разгуляться фантазии. И если сначала
                          мы пытались искать правильные ответы, то по ходу игры
                          стало интереснее и смешнее запутать других игроков.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </div>
            </Row>

            <div className="button-container">
              <Button className="button-custom">Смотреть все отзывы</Button>
            </div>
          </div>
        </div>
        <Col xs={12} md={4} className="payment-container">
          <p className="payment-info">Принимаем к оплате</p>
          <div className="payment-image-container">
            <img src={payment} alt="Payment" className="payment-image" />
          </div>
          <p className="country-info">Я из другой страны {"—"}</p>
          <p
            className="payment-link"
            onClick={() =>
              window.open("https://kvestiks.ru/scenarios/o-boze-kakoj-muzcina#")
            }
          >
            как оплатить?
          </p>
          <div className="cust">
            <Button className="button-customs">Купить квест 500 руб</Button>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Content;
