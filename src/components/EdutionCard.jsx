import React from 'react';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";
import { useTranslation } from "react-i18next";

import { Fade } from 'react-reveal';

const EdutionCard = ({education}) => {
    const { t } = useTranslation();
    return ( 
        <Fade right duration={1000} distance="40px">
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                    <div className="pl-4">
                        <h5 className="text-info">
                        {t(education.schoolName)}
                        </h5>
                        <h6>{t(education.subHeader)}</h6>
                        <Badge color="info" className="mr-1">
                        {t(education.duration)}
                    </Badge>
                        <p className="description mt-3">
                            {t(education.desc)}
                            <ul>
                            {
                                education.descBullets ? 
                                education.descBullets.map((desc) => {
                                    return <li key={desc}>{t(desc)}</li>
                                }) : null
                            }
                        </ul>
                        </p>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
     );
}
 
export default EdutionCard;