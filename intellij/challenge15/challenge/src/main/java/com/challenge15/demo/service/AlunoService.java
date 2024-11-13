package com.challenge15.demo.service;

import com.challenge15.demo.dto.AlunoDTO;
import com.challenge15.demo.entity.AlunoEntity;
import com.challenge15.demo.entity.CursoEntity;
import com.challenge15.demo.repository.AlunoRepository;
import com.challenge15.demo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public List<AlunoDTO> getAllUsers(){
        return alunoRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public AlunoDTO getUserById(Integer id){
        Optional<AlunoEntity> userEntityOptional = alunoRepository.findById(Long.valueOf(id));
        return userEntityOptional.map(this::convertToDTO).orElse(null);
    }

    public AlunoDTO createAluno(AlunoDTO alunoDTO){
        AlunoEntity alunoEntity = new AlunoEntity();
        alunoEntity.setNome(alunoDTO.getNome());
        alunoEntity.setEmail(alunoDTO.getEmail());
        alunoEntity.setCursos(alunoDTO.getCursos());

        alunoRepository.save(alunoEntity);

        return convertToDTO(alunoEntity);
    }

    public AlunoDTO updateAluno(Integer id, AlunoDTO userDTO){
        Optional<AlunoEntity> userOptional = alunoRepository.findById(Long.valueOf(id));
        if(userOptional.isPresent()){
            AlunoEntity alunoEntity = userOptional.get();
            alunoEntity.setNome(userDTO.getNome());
            alunoEntity.setEmail(userDTO.getEmail());
            alunoEntity.setCursos(userDTO.getCursos());
            alunoRepository.save(alunoEntity);

            return convertToDTO(alunoEntity);
        }
        return null;
    }

    public void deleteUser(Integer id){
        alunoRepository.deleteById(Long.valueOf(id));
    }

    public AlunoDTO matricularAlunoEmCurso(Long alunoId, Long cursoId) {
        AlunoEntity aluno = alunoRepository.findById(alunoId).orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
        CursoEntity curso = cursoRepository.findById(cursoId).orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        aluno.getCursos().add(curso);
        alunoRepository.save(aluno);

        return convertToDTO(aluno);
    }

    public AlunoDTO removerAlunoDeCurso(Long alunoId, Long cursoId) {
        AlunoEntity aluno = alunoRepository.findById(alunoId).orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
        CursoEntity curso = cursoRepository.findById(cursoId).orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        aluno.getCursos().remove(curso);
        alunoRepository.save(aluno);

        return convertToDTO(aluno);
    }

    public Set<CursoEntity> listarCursosDeAluno(Long alunoId) {
        AlunoEntity aluno = alunoRepository.findById(alunoId).orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
        return aluno.getCursos();
    }

    private AlunoDTO convertToDTO(AlunoEntity alunoEntity){
        AlunoDTO alunoDTO = new AlunoDTO();
        alunoDTO.setId(alunoEntity.getId());
        alunoDTO.setNome(alunoEntity.getNome());
        alunoDTO.setEmail(alunoEntity.getEmail());
        alunoDTO.setCursos(alunoEntity.getCursos());
        return alunoDTO;
    }
}
