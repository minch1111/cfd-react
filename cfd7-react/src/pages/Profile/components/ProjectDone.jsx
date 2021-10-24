import React from 'react'
import ProjDone from '../../../components/YourProjDone'

function ProjectDone(props) {
    return (
        <div className="tab3" >
                <div className="row">
                  {
                    props.projDone.map((value, key) => (
                      <ProjDone

                        name={value.name}
                        description={value.description}
                        teacher={value.teacher}

                      />
                    ))
                  }
                </div>
                <div className="btn-wrap">
                  <div className="btn overlay btn-icon round">
                    <img src="img/icon-upload.svg" alt="" /> Tải lên
                  </div>
                </div>
              </div>
    )
}

export default ProjectDone
