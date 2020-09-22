import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)

        if (!this.state.name || !this.state.email || !this.state.msg) {
            alert('Please enter all fields')
            this.props.history.push('/home');
        }
        else {
            alert('Msg Sent')
            axios.post('/api/user/contact', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            this.props.history.push('/home');
        }
    }

    render() {
        const { name, email, msg } = this.state
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-dark"
                    style={{ backgroundColor: "black" }}
                >
                    <a className="navbar-brand" href="#">
                        <h2 className="ml-3 text-white">My MI</h2>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item active">
                                <a
                                    className="nav-link text-white"
                                    href="#carouselExampleCaptions"
                                >
                                    HOME{" "}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    SERVICES
              </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">
                                    PRODUCTS
              </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    ABOUT
              </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    CONTACT
              </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/settings">
                                    SETTINGS
              </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Logout
              </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleCaptions"
                            data-slide-to={0}
                            className="active"
                        />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval={2000}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/Screenshot-(24).png?alt=media&token=51aa5c00-45ac-4ad5-99a9-17cf49628bd2"
                                className="w-100"
                            />
                            <div className="carousel-caption ">
                                <a
                                    href="https://www.flipkart.com/redmi-note-7-pro-space-black-64-gb/p/itmfegkx2gufuzhp?pid=MOBFDXZ36Y4DJBGM&lid=LSTMOBFDXZ36Y4DJBGMQF27GZ&marketplace=FLIPKART&srno=s_1_6&otracker=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_na&fm=SEARCH&iid=393a1c70-3fe2-49e6-980c-4bb5d6e37f72.MOBFDXZ36Y4DJBGM.SEARCH&ppt=sp&ppn=sp&ssid=2xf59g1cdc0000001594998617036&qH=6c53ec9c5a4ebbd0"
                                    type="button"
                                    className="btn btn-lg"
                                    style={{
                                        background: "black",
                                        color: "white"
                                    }}
                                >
                                    Buy Now
              </a>
                            </div>
                        </div>
                        <div className="carousel-item " data-interval={2000}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/Screenshot-(21).png?alt=media&token=ea38b015-a2be-41aa-b5cd-4e2389c6ac54"
                                className="w-100"
                            />
                        </div>
                        <div className="carousel-item" data-interval={2000}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/Screenshot-(23).png?alt=media&token=140f6de1-45b0-43ab-aa2a-5dd9bddb1e10"
                                className=" w-100 "
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleCaptions"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleCaptions"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>
                <br />
                <br />
                <br />
                <div className="container" id="services">
                    <div className="row">
                        <div className="col-md-4 text-center mb-5">
                            <svg
                                width="4em"
                                height="4em"
                                viewBox="0 0 16 16"
                                className="bi bi-phone"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                                />
                                <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <br />
                            <br />
                            <h5>
                                {" "}
                                <b>MOBILE PHONES</b>
                            </h5>
                            <p className="lead">
                                {" "}
              We have a mobile for everybody out there. Whether you're looking
              for larger, fuller screens, power-packed batteries, blazing-fast
              processors, beautification apps, high-tech selfie cameras or just
              large internal space, we take care of all the essentials.
            </p>
                        </div>
                        <div className="col-md-4 text-center mb-5">
                            <svg
                                width="4em"
                                height="4em"
                                viewBox="0 0 16 16"
                                className="bi bi-wallet2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"
                                />
                            </svg>
                            <br />
                            <br />
                            <h5>
                                {" "}
                                <b>NO COST EMI</b>
                            </h5>
                            <p className="lead">
                                In an attempt to make high-end products accessible to all, our No
                                Cost EMI plan enables you to shop with us under EMI, without
                                shelling out any processing fee.
            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <svg
                                width="4em"
                                height="4em"
                                viewBox="0 0 16 16"
                                className="bi bi-card-heading"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                                />
                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                            </svg>
                            <br />
                            <br />
                            <h5>
                                {" "}
                                <b>EXCHANGE OFFERS</b>
                            </h5>
                            <p className="lead">
                                Get an instant discount on the phone that you have been eyeing on.
                                Exchange your old mobile for a new one after the experts calculate
                                the value of your old phone, provided it is in a working condition
                                without damage to the screen.
            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ backgroundColor: "black" }}>
                    <div className="container" id="products">
                        <br />
                        <br />
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="text-white">FEATURED PRODUCTS</h1>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-8a-dual.jpeg?alt=media&token=2d887bc6-7cff-4d44-8da6-3eca3d657c30">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-8a-dual.jpeg?alt=media&token=2d887bc6-7cff-4d44-8da6-3eca3d657c30"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi 8A Dual
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-8a-dual-sea-blue-32-gb/p/itmf5568beb3c3a5?pid=MOBFP764TNKZRSB8&lid=LSTMOBFP764TNKZRSB88NI43U&marketplace=FLIPKART&srno=s_1_2&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&fm=SEARCH&iid=e5df8bb4-a9de-46b2-b5d0-362e38ed3a19.MOBFP764TNKZRSB8.SEARCH&ppt=sp&ppn=sp&ssid=gruefv1keo0000001594996841373&qH=7de36b437d97074d"
                                            className="btn"
                                            style={{
                                                background: "black",
                                                color: "white"
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-note-9-pro.jpeg?alt=media&token=8f99a03a-0541-4957-9826-66633410ab32">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-note-9-pro.jpeg?alt=media&token=8f99a03a-0541-4957-9826-66633410ab32"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi Note 9 Pro
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-note-9-pro-aurora-blue-64-gb/p/itma84d60532d415?pid=MOBFPZXUDUPUKZF6&lid=LSTMOBFPZXUDUPUKZF6QWEVSI&marketplace=FLIPKART&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&fm=SEARCH&iid=61653e21-6320-449a-a1d1-114bb12d8f44.MOBFPZXUDUPUKZF6.SEARCH&ppt=sp&ppn=sp&ssid=0pcev9wlrk0000001594997249814&qH=e3cd86732b15d000"
                                            className="btn"
                                            style={{
                                                background: "black",
                                                color: "white"
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-note-8.jpeg?alt=media&token=efab7623-076a-43ca-8b50-e697781ce980">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-note-8.jpeg?alt=media&token=efab7623-076a-43ca-8b50-e697781ce980"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi Note 8
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-note-8-moonlight-white-64-gb/p/itm16c6c50702ff1?pid=MOBFHGTKYGZBXNGK&lid=LSTMOBFHGTKYGZBXNGK9EAQ9C&marketplace=FLIPKART&srno=s_1_10&otracker=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_13_na_na_na&fm=SEARCH&iid=61653e21-6320-449a-a1d1-114bb12d8f44.MOBFHGTKYGZBXNGK.SEARCH&ppt=sp&ppn=sp&ssid=0pcev9wlrk0000001594997249814&qH=e3cd86732b15d000"
                                            className="btn"
                                            style={{
                                                background: "black",
                                                color: "white"
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/note-7.jpeg?alt=media&token=72f6d094-9930-4166-b8cd-8797c35e59bb">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/note-7.jpeg?alt=media&token=72f6d094-9930-4166-b8cd-8797c35e59bb"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi Note 7
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-note-7-onyx-black-64-gb/p/itmfdzvfrnfsuywx?pid=MOBFDXZ39EGFJDFJ&lid=LSTMOBFDXZ39EGFJDFJ1WY1BN&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=35e0b224-3e2d-45e7-a6d9-b3e1fffb19f6.MOBFDXZ39EGFJDFJ.SEARCH&ppt=sp&ppn=sp&ssid=c3utszpxsg0000001594998847518&qH=1cf708419102918e"
                                            className="btn"
                                            style={{
                                                background: "black",
                                                color: "white"
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-k20-pro.jpeg?alt=media&token=67532a8c-574d-44e8-ab5c-1b38880a3bc2">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-k20-pro.jpeg?alt=media&token=67532a8c-574d-44e8-ab5c-1b38880a3bc2"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi K20 Pro
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-k20-pro-flame-red-128-gb/p/itmfg7uysw6gs55a?pid=MOBFG7UYFKHFKBNB&lid=LSTMOBFG7UYFKHFKBNBIBDWWE&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=2194b67a-f184-49fe-aec7-e4dc622f424c.MOBFG7UYFKHFKBNB.SEARCH&ppt=sp&ppn=sp&ssid=f5dcff6wow0000001594998927734&qH=0b2f308098dbede3"
                                            className="btn"
                                            style={{
                                                background: 'black',
                                                color: 'white'
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-k20.jpeg?alt=media&token=d24d966f-8a8c-4c91-9ca8-2d09e1820574">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/redmi-k20.jpeg?alt=media&token=d24d966f-8a8c-4c91-9ca8-2d09e1820574"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi K20
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-k20-carbon-black-64-gb/p/itmfgfjtkpnd64gb?pid=MOBFG7UYRCCTB7BA&lid=LSTMOBFG7UYRCCTB7BAYTKRNO&marketplace=FLIPKART&srno=s_1_14&otracker=search&otracker1=search&fm=SEARCH&iid=3f7f891a-b3a5-4f23-91f6-d61e565005aa.MOBFG7UYRCCTB7BA.SEARCH&ppt=sp&ppn=sp&ssid=lc3m9bcw000000001594998167553&qH=65c688436aa47b80"
                                            className="btn"
                                            style={{
                                                background: 'black',
                                                color: 'white'
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-note-9-pro-max.jpeg?alt=media&token=2ee8b8a5-f91c-4c7e-8e48-79cf87a75cfb">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-note-9-pro-max.jpeg?alt=media&token=2ee8b8a5-f91c-4c7e-8e48-79cf87a75cfb"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi Note 9 Pro Max
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-note-9-pro-max-glacier-white-128-gb/p/itm8f7be0339828b?pid=MOBFRWZNDTQSCQCB&lid=LSTMOBFRWZNDTQSCQCBIXPGDD&marketplace=FLIPKART&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=b96f56c3-b0c8-45a9-9670-4fea6813ac85.MOBFRWZNDTQSCQCB.SEARCH&ppt=sp&ppn=sp&ssid=605bzc8puo0000001594999299005&qH=411c23176a43d201"
                                            className="btn"
                                            style={{
                                                background: 'black',
                                                color: 'white'
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-10.jpeg?alt=media&token=995234dc-728c-4750-8787-1816fc3da1a2">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-10.jpeg?alt=media&token=995234dc-728c-4750-8787-1816fc3da1a2"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi 10
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/mi-10-coral-green-256-gb/p/itm63f68fab40d26?pid=MOBFRXYADQEXBCKB&lid=LSTMOBFRXYADQEXBCKBDL8AFA&marketplace=FLIPKART&srno=s_1_13&otracker=search&otracker1=search&fm=SEARCH&iid=09242705-130e-4cc8-af51-0d0a57762a3d.MOBFRXYADQEXBCKB.SEARCH&ppt=sp&ppn=sp&ssid=zkiyrqvmkg0000001595076486791&qH=65c688436aa47b80"
                                            className="btn"
                                            style={{
                                                background: 'black',
                                                color: 'white'
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="card w-75 mx-auto mb-5 bg-dark">
                                    <a href="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-go.jpeg?alt=media&token=c78c1866-72fd-4b3d-b1be-fbb9c975446c">
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mi-redmi-go.jpeg?alt=media&token=c78c1866-72fd-4b3d-b1be-fbb9c975446c"
                                            className="card-img-top rounded-lg"
                                        />
                                    </a>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center text-white">
                                            Redmi Go
                  </h5>
                                        <a
                                            href="https://www.flipkart.com/redmi-go-blue-16-gb/p/itmfgqsaszhhyyy6?pid=MOBFGQSAQYYGFNSB&lid=LSTMOBFGQSAQYYGFNSBZF4NAJ&marketplace=FLIPKART&srno=s_2_36&otracker=search&otracker1=search&fm=SEARCH&iid=d42317da-d0ec-4c16-962e-6fe0fd2f4f4f.MOBFGQSAQYYGFNSB.SEARCH&ppt=sp&ppn=sp&qH=65c688436aa47b80"
                                            className="btn"
                                            style={{
                                                background: 'black',
                                                color: 'white'
                                            }}
                                        >
                                            Buy Now
                  </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container" id="about">
                    <div className="row">
                        <div className="col-md-5 text-center mb-3">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-bbf2e.appspot.com/o/mobile-phone-5388160.jpg?alt=media&token=d9b45468-6c2e-4498-b23b-ee3a5e508c1c"
                                className="img-fluid"
                                width="400px"
                                height="250px"
                            />
                        </div>
                        <div className="col-md-7 my-auto">
                            <h1>About Comapny</h1>
                            <p className="lead">
                                MyMI houses Redmi Smartphones. For those of you looking for
                                smartphones, well look no more, we've got you covered. MyMI is
                                your best bet. This website is designed by Shashwat Seth.
            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container" id="contact">
                    <div className="row">
                        <div className="col text-center">
                            <h1> Contact Us</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        onChange={this.changeHandler}
                                    />
                                    <small className="form-text text-muted">
                                        We'll never share your email with anyone else.
                </small>
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        type="text"
                                        value={msg}
                                        name="msg"
                                        className="form-control"
                                        placeholder="Enter Your Msg"
                                        rows={2}
                                        defaultValue={""}
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">
                                        Subscribe to newsletter
                </label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-lg"
                                        style={{
                                            background: 'black',
                                            color: 'white'
                                        }}
                                    >
                                        Submit
                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{ backgroundColor: "black" }}>
                    <div className="container">
                        <br />
                        <br />
                        <div className="row">
                            <div className="col text-center text-white">
                                <h1>MyMI</h1>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center text-white">
                                <p className="lead">
                                    <small>
                                        This Website, including all Materials present, is the property
                                        of My MI and is copyrighted and protected by worldwide
                  copyright laws and treaty provisions.{" "}
                                    </small>
                                </p>
                                <i className="fa fa-facebook fa-2x px-3 " />
                                <i className="fa fa-twitter fa-2x px-3" />
                                <i className="fa fa-instagram fa-2x px-3" />
                                <br />
                                <br />
                                <div className="border-top text-light">
                                    <br />
                                    <p>&copy; Copy Right My MI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(home);
