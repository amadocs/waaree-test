import _ from 'lodash'
import React from 'react';
import { Container} from 'react-bootstrap';
import Link from 'next/link'
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
export default function  AboutJoinTeamSection(props){

    return(
        <section className="section join-team-section" style={{backgroundImage: `url(${props?.JoinTeam?.attributes?.Banner_Image?.data?.attributes?.url
        ?props?.JoinTeam?.attributes?.Banner_Image?.data?.attributes?.url
        : process.env.NEXT_PUBLIC_NO_IMAGE})`}}>
        <div className="section-inner">
            <Container>
                <div className="section-wrap">
                    <div className="join-team-content text-center">
                    <SectionTitle sectionTitle={props?.JoinTeam?.attributes?.Title} titleTheme="light-title" />
                        <div className="team-content-text reveal-fade" dangerouslySetInnerHTML={{ __html:props?.JoinTeam?.attributes?.Short_Description}}>
                          
                        </div>
                        <div className="btn-wrap reveal-fade">
                            <Link href={props?.JoinTeam?.attributes?.Button_Link} prefetch={false} >
                            <a  className="btn btn-primary">View Current Position<i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </section>
    )
}


