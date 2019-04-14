import React from 'react';
import { Divider, Header, Icon, Table, Image } from 'semantic-ui-react';
import styles from './SerialInfo.module.css';

const Info = ({cS}) => {
    return (
        <React.Fragment>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='film'/>
                About
            </Header>
        </Divider>
            <div className={styles.wrapper}>
                <Image src={cS.show.image ? cS.show.image.medium : 'https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png' } style={{marginTop:'1rem', height: '295px'}} />
                <Table definition>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Title</Table.Cell>
                            <Table.Cell style={{fontSize: '1.5rem', fontWeight: '700'}}> {cS.show.name}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Genres</Table.Cell>
                            <Table.Cell style={{fontWeight: '700'}}>{cS.show.genres ? cS.show.genres.join(', ') : '---'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell width={3}>Rating</Table.Cell>
                            <Table.Cell>{cS.show.rating.average ? cS.show.rating.average : '---'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Network</Table.Cell>
                            <Table.Cell><span style={{fontWeight: '700'}}>{cS.show.network.name ? cS.show.network.name : '---'}</span>, {cS.show.language}.</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Year</Table.Cell>
                            <Table.Cell><span style={{fontWeight: '700'}}>{cS.show.premiered ? cS.show.premiered.split('-')[0] : '---'}</span></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell> OfficialSite</Table.Cell>
                            <Table.Cell>{cS.show.officialSite ? <a href={cS.show.officialSite} target="_blank" rel="noopener noreferrer">Go to webSite</a> : '---'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Description</Table.Cell>
                            <Table.Cell>{cS.show.summary ? <div style={{height: '8rem', overflow: 'auto'}} contentEditable='true' dangerouslySetInnerHTML={{ __html: `${cS.show.summary}`}}></div> : '---' } </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
</React.Fragment>
    );
};

export default Info;