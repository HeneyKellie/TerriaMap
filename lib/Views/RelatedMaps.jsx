import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Content"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related content"
      showDropdownInCenter
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Content</label>
      </div>

      <p>Clicking on a link below will open it in a separate window or tab.</p>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://www.marine.ie/Home/home">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/marine.png")}
            alt="Marine Institute"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://www.marine.ie/Home/home"
        >
          Marine Institute
        </a>

        <p>
          The state agency responsible for marine research, technology
          development, and innovation in Ireland
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="http://data.marine.ie">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/datacatalog.png")}
            alt="Marine Institute Data Catalogue"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="http://data.marine.ie/"
        >
          Marine Institute Data Catalogue
        </a>

        <p>
          The concept of the European Maritime and Fisheries Fund and of
          Ireland's Digital Ocean programme is to integrate marine data from
          multiple sources and representing a large range of parameters. This
          catalogue aims to support these programmes through providing a
          comprehensive, single discovery portal for marine data collected,
          created and curated by a number of organisations around Ireland.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://marineplan.ie/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/marineplan.png")}
            alt="MarinePlan.ie"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://marineplan.ie/"
        >
          MarinePlan.ie
        </a>

        <p>
          This web map portal is Ireland’s first marine spatial planning portal.
          It links planning within the Maritime area and the relevant policies
          for each marine sector or activity listed in the National Marine
          Planning Framework (NMPF). The web portal is an initiative of the
          Government of Ireland.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="http://map.aurin.org.au">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/aurin-map.jpg")}
            alt="AURIN Map"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="http://map.aurin.org.au"
        >
          AURIN Map
        </a>

        <p>
          AURIN Map provides access to datasets on urban infrastructure for
          urban researchers, policy and decision makers.
        </p>
      </div>
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool
};

export default RelatedMaps;
