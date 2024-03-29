class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.IMAGE_PARTS = 4;
  
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 2400;
  
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
  
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
  
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
  
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
  
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
  
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) },
        React.createElement("p", { className: "slider__top-heading" }, "Albi: Circuit Azur"),
        
        React.createElement("div", { className: "slider__slides" },
        this.props.slides.map((slide, index) =>
        React.createElement("div", {
          className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
          key: slide.city },
  
        React.createElement("div", { className: "slider__slide-content" },
        React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city),
        React.createElement("h2", { className: "slider__slide-heading" },
        slide.city.split('').map(l => React.createElement("span", null, l))),
  
        React.createElement("p", { className: "slider__slide-readmore" }, "")),
  
        React.createElement("div", { className: "slider__slide-parts" },
        [...Array(this.IMAGE_PARTS).fill()].map((x, i) =>
        React.createElement("div", { className: "slider__slide-part", key: i },
        React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))),
  
  
  
  
  
  
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }),
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) }),
        React.createElement("div", { className: "slider__table" })));
  
  
  }}
  
  
  const slides = [
  
 
  
  {
    city: 'Du-Tarn',
    country: 'Berges',
    img:'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/id60a537df12e6e67/version/1655734165/image.jpg' },
  
  {
    city: 'Madeleine',
    country: 'Eglise',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/i745a88315f7f0855/version/1655734272/image.jpg' },
  
    {
      city: 'De-Veyre',
      country: 'Escalier',
      img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/ia739dc3c8631f9cd/version/1655734157/image.jpg' },
  {
    city: 'Gorsse',
    country: 'Hotel',
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/id604cf96e8fecb0b/version/1656341492/image.jpg' },
  
    {
        city: 'Romane',
        country: 'Maison',
        img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/i75dc51f6dc31391b/version/1655734238/image.jpg' },
  
    {
      city: 'Neuf',
      country: 'Pont',
      img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/i9d8b225056ec9376/version/1655734253/image.jpg' },
    
      {
        city: 'Vieux',
        country: 'Pont',
        img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb96c01c741db7101/image/i4d63a7e249fa16a2/version/1655734253/image.jpg' }];
  
  
  
  ReactDOM.render(React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));