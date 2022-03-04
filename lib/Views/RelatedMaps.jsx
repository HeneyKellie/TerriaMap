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
        <a target="_blank" href="http://isde.ie">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/ISDE.png")}
            alt="ISDE"
          />
        </a>

        <a target="_blank" className={Styles.link} href="http://isde.ie">
          ISDE
        </a>

        <p>
          The Irish Spatial Data Exchange (ISDE) is the spatial data catalogue
          and repository for the publication of descriptive metadata. ISDE
          enables users to discover what spatial data exists, how to access that
          data, its fitness for purpose, who/when and how the data was created,
          its geographic extent, as well as licence conditions on rights of use.
        </p>
      </div>
      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://infomar.ie">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/infomar.png")}
            alt="INFOMAR"
          />
        </a>

        <a target="_blank" className={Styles.link} href="https://infomar.ie">
          INFOMAR
        </a>

        <p>
          INFOMAR is a DECC funded joint programme between the Geological Survey
          Ireland and the Marine Institute, surveying our unmapped marine
          territory and creating a range of integrated mapping products of the
          physical, chemical and biological features of the seabed.
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
