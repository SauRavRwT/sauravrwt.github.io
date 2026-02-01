import React, { Component } from "react";
import "./CertificationCardStack.css";
import { Fade } from "react-reveal";

class CertificationCardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isDragging: false,
      dragX: 0,
      dragStartTime: 0,
    };
    this.touchStartX = 0;
    this.mouseStartX = 0;
    this.isMouseDown = false;
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handlePrevious = () => {
    const { certificates } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + certificates.length) %
        certificates.length,
    }));
  };

  handleNext = () => {
    const { certificates } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % certificates.length,
    }));
  };

  handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    this.touchStartX = e.touches[0].clientX;
    this.setState({ isDragging: true, dragStartTime: Date.now() });
  };

  handleTouchMove = (e) => {
    if (e.touches.length !== 1 || !this.state.isDragging) return;
    const currentX = e.touches[0].clientX;
    const dragDistance = currentX - this.touchStartX;

    e.preventDefault();
    this.setState({ dragX: dragDistance });
  };

  handleTouchEnd = (e) => {
    const dragDistance = e.changedTouches[0].clientX - this.touchStartX;
    this.handleDragEnd(dragDistance);
  };

  handleMouseDown = (e) => {
    // Prevent dragging if clicking on a link
    if (e.target.closest("a")) return;

    this.isMouseDown = true;
    this.mouseStartX = e.clientX;
    this.setState({ isDragging: true, dragStartTime: Date.now() });
  };

  handleMouseMove = (e) => {
    if (!this.isMouseDown) return;
    const dragDistance = e.clientX - this.mouseStartX;
    this.setState({ dragX: dragDistance });
  };

  handleMouseUp = (e) => {
    if (!this.isMouseDown) return;
    this.isMouseDown = false;
    const dragDistance = e.clientX - this.mouseStartX;
    this.handleDragEnd(dragDistance);
  };

  handleDragEnd = (dragDistance) => {
    const swipeThreshold = 60;
    const dragDuration = Date.now() - this.state.dragStartTime;
    const velocity = Math.abs(dragDistance) / dragDuration;

    this.setState({ isDragging: false, dragX: 0 });

    // Consider both distance and velocity for better UX
    if (Math.abs(dragDistance) > swipeThreshold || velocity > 0.5) {
      if (dragDistance > 0) {
        this.handlePrevious();
      } else {
        this.handleNext();
      }
    }
  };

  getCardStyle = (certIndex) => {
    const { currentIndex, isDragging, dragX } = this.state;
    const { certificates } = this.props;
    const n = certificates.length;

    // Calculate relative position
    let relativePos = (certIndex - currentIndex + n) % n;
    if (relativePos > n / 2) relativePos -= n;

    // Only show cards in range [-1, 2]
    if (relativePos < -1 || relativePos > 2) {
      return { display: "none" };
    }

    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 100;

    // Base positions without drag
    if (relativePos === 0) {
      // Current card
      zIndex = 100;
      scale = 1;
      opacity = 1;
      translateX = 0;
      translateY = 0;
    } else if (relativePos === 1) {
      // Next card
      zIndex = 99;
      scale = 0.94;
      opacity = 0.7;
      translateX = 12;
      translateY = 16;
    } else if (relativePos === 2) {
      // Next next card
      zIndex = 98;
      scale = 0.88;
      opacity = 0.5;
      translateX = 24;
      translateY = 32;
    } else if (relativePos === -1) {
      // Previous card
      zIndex = 99;
      scale = 0.94;
      opacity = 0.7;
      translateX = -12;
      translateY = 16;
    }

    // Apply drag transformations
    if (isDragging && Math.abs(dragX) > 5) {
      const dragProgress = Math.min(Math.abs(dragX) / 300, 1);
      const dragDirection = dragX > 0 ? 1 : -1;

      if (relativePos === 0) {
        // Current card being dragged
        translateX = dragX * 0.8;
        scale = 1 - dragProgress * 0.15;
        opacity = 1 - dragProgress * 0.4;
        zIndex = 95; // Lower than incoming card
      } else if (
        (dragDirection > 0 && relativePos === -1) ||
        (dragDirection < 0 && relativePos === 1)
      ) {
        // Incoming card (previous when dragging right, next when dragging left)
        const incomingProgress = dragProgress;
        translateX = relativePos * 12 + dragX * 0.6;
        translateY = 16 - incomingProgress * 16;
        scale = 0.94 + incomingProgress * 0.06;
        opacity = 0.7 + incomingProgress * 0.3;
        zIndex = 105; // Highest - comes to front
      } else if (relativePos === 1 && dragDirection > 0) {
        // Next card moves further back when dragging right
        translateX = 12 + dragProgress * 12;
        translateY = 16 + dragProgress * 16;
        scale = 0.94 - dragProgress * 0.06;
        opacity = 0.7 - dragProgress * 0.2;
      } else if (relativePos === -1 && dragDirection < 0) {
        // Previous card moves further back when dragging left
        translateX = -12 - dragProgress * 12;
        translateY = 16 + dragProgress * 16;
        scale = 0.94 - dragProgress * 0.06;
        opacity = 0.7 - dragProgress * 0.2;
      }
    }

    return {
      transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: isDragging
        ? "none"
        : "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      cursor: isDragging ? "grabbing" : "grab",
      pointerEvents: relativePos === 0 ? "auto" : "none",
    };
  };

  render() {
    const { certificates, theme } = this.props;

    if (!certificates || certificates.length === 0) {
      return null;
    }

    return (
      <Fade bottom duration={2000} distance="20px">
        <div
          className="cert-stack-container"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          ref={this.containerRef}
        >
          <div className="cert-stack-card-container">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="cert-card1"
                style={{
                  backgroundColor: theme?.body || "#ffffff",
                  ...this.getCardStyle(index),
                }}
              >
                <div className="cert">
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (
                        this.state.isDragging ||
                        Math.abs(this.state.dragX) > 5
                      ) {
                        e.preventDefault();
                      }
                    }}
                    style={{
                      pointerEvents:
                        index === this.state.currentIndex ? "auto" : "none",
                    }}
                  >
                    <div
                      className="cert-card-header"
                      style={{ backgroundColor: cert.color_code }}
                    >
                      <div className="cert-overlay"></div>
                      <img
                        src={require(`../../assets/images/${cert.logo_path}`)}
                        alt={cert.alt_name || cert.title}
                        draggable={false}
                      />
                      <div className="cert-details fadeIn-top">
                        <h3
                          className="cert-card-label-text"
                          style={{ color: theme?.body || "#ffffff" }}
                        >
                          Certificate
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cert-card-body">
                  <h2
                    className="cert-card-title"
                    style={{ color: theme?.text || "#000000" }}
                  >
                    {cert.title}
                  </h2>
                  <h3
                    className="cert-card-subtitle"
                    style={{ color: theme?.secondaryText || "#666666" }}
                  >
                    {cert.subtitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Counter indicator */}
          <div className="cert-counter-indicator">
            {certificates.map((_, index) => (
              <div
                key={index}
                className="cert-counter-dot"
                style={{
                  width: index === this.state.currentIndex ? "24px" : "8px",
                  backgroundColor:
                    index === this.state.currentIndex
                      ? theme?.text || "#000000"
                      : theme?.secondaryText || "#cccccc",
                  opacity: index === this.state.currentIndex ? 1 : 0.4,
                }}
                onClick={() => this.setState({ currentIndex: index })}
              />
            ))}
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCardStack;
