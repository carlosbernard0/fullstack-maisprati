package com.challenge15.demo.service;

import com.challenge15.demo.dto.CursoDTO;
import com.challenge15.demo.entity.AlunoEntity;
import com.challenge15.demo.entity.CursoEntity;
import com.challenge15.demo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public List<CursoDTO> getAllCourses() {
        return cursoRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public CursoDTO getCourseById(Integer id) {
        Optional<CursoEntity> courseEntityOptional = cursoRepository.findById(Long.valueOf(id));
        return courseEntityOptional.map(this::convertToDTO).orElse(null);
    }

    public CursoDTO createCourse(CursoDTO courseDTO) {
        CursoEntity courseEntity = new CursoEntity();
        courseEntity.setNome(courseDTO.getNome());
        courseEntity.setDesc(courseDTO.getDesc());

        courseEntity.setAlunos(courseDTO.getAlunos());

        cursoRepository.save(courseEntity);

        return convertToDTO(courseEntity);
    }

    public CursoDTO updateCourse(Integer id,CursoDTO courseDTO) {
        Optional<CursoEntity> courseEntityOptional =cursoRepository.findById(Long.valueOf(id));

        if(courseEntityOptional.isPresent()) {
            CursoEntity courseEntity = courseEntityOptional.get();
            courseEntity.setNome(courseDTO.getNome());
            courseEntity.setDesc(courseDTO.getDesc());
            courseEntity.setAlunos(courseDTO.getAlunos());

            cursoRepository.save(courseEntity);

            return convertToDTO(courseEntity);
        }

        return null;
    }

    public void deleteCourse(Integer id) {
        cursoRepository.deleteById(Long.valueOf(id));
    }

    public Set<AlunoEntity> listarAlunosDeCurso(Long cursoId) {
        CursoEntity curso = cursoRepository.findById(cursoId).orElseThrow(() -> new RuntimeException("Curso não encontrado"));
        return curso.getAlunos();
    }

    private CursoDTO convertToDTO(CursoEntity cursoEntity) {
        CursoDTO courseDTO = new CursoDTO();
        courseDTO.setId(cursoEntity.getId());
        courseDTO.setNome(cursoEntity.getNome());
        courseDTO.setDesc(cursoEntity.getDesc());
        courseDTO.setAlunos(cursoEntity.getAlunos());
        return courseDTO;
    }
}
